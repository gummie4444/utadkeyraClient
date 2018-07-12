import React from 'react';

import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import InfiniteScroll from 'react-infinite-scroller';
import moment from 'moment';

import ErrorMessage from './ErrorMessage';
import Trip from './Trip';
import NoTripsFound from './NoTripsFound';


export const tripsSkipQuery = gql`
  query tripsSkip($from:Int, $to:Int, $date:DateTime, $skip: Int, $amount: Int) {
    tripsSkip(from:$from, to: $to, date: $date, skip: $skip, amount: $amount) { 
      trips {
        id
        time
        type
        fromCity {
          id
          name
        }
        toCity {
          id
          name
        }
        tripDetails {
          name
          email
          mobile
          phone
          notes
          seats
          smokeStatus
        }
      }
      count
    }
  }
`;
export const tripsSkipQueryVars = {
  skip: 0,
  amount: 20,
};


const TripsList = ({
  from, to, fromId, toId, date, skip, amount, openPortal,
}) => (
  <Query
    query={tripsSkipQuery}
    variables={{
      from: fromId,
      to: toId,
      date,
      skip,
      amount,
    }}
  >
    {({
    loading, error, data: { tripsSkip }, fetchMore,
}) => {
  console.log(loading, 'loading');
      console.log(tripsSkip, 'data');
      console.log(from, to, date, skip, amount, 'vars');
      if (error) return <ErrorMessage message="Error loading rides." />;
      if (tripsSkip && tripsSkip.trips && tripsSkip.trips.length) {
        const areMorePosts = tripsSkip.trips.length < tripsSkip.count;
        return (
          <div style={{width:'100%'}}>
            <InfiniteScroll
              pageStart={0}
              loadMore={() =>
                  fetchMore({
                    variables: {
                      from: fromId,
                      to: toId,
                      date,
                      skip: tripsSkip.trips.length,
                      amount,
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                      console.log(previousResult, 'fetchmora1');
                      console.log(fetchMoreResult, 'fetchmora2');

                      if (!fetchMoreResult) {
                        return previousResult;
                      }

                      const newTripSkip = Object.assign({}, previousResult.tripsSkip, {
                        trips: [...previousResult.tripsSkip.trips, ...fetchMoreResult.tripsSkip.trips],
                      });
                      const test = Object.assign({}, previousResult, {
                        // Append the new posts results to the old one
                        tripsSkip: newTripSkip,
                      });
                      console.log(test, 'appended');
                      return test;
                    },
                  })
              }
              hasMore={areMorePosts}
            >
              {tripsSkip.trips.map((trip, index) => (
                  <Trip openPortal={openPortal} key={trip.id} trip={trip} index={index} />
              ))}
            </InfiniteScroll>
            <style jsx>{`
              section {
                padding-bottom: 20px;
              }
            `}
            </style>
          </div>
        );
      }
      if (tripsSkip.count === 0) {
        return <NoTripsFound from={from} to={to} date={date} />;
      }
      return <div>Loading trips...</div>;
    }}
  </Query>
);


export default TripsList;
