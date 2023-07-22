// resolvers.js

const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

const jobApplications = [];

const resolvers = {
  Query: {
    jobApplications: () => jobApplications,
  },
  Mutation: {
    addJobApplication: (parent, args) => {
      const newApplication = { id: String(jobApplications.length + 1), ...args };
      jobApplications.push(newApplication);

      // Publish the subscription message when a new application is added
      pubsub.publish('JOB_APPLICATION_ADDED', { jobApplicationAdded: newApplication });

      return newApplication;
    },
  },
  Subscription: {
    jobApplicationAdded: {
      subscribe: () => pubsub.asyncIterator(['JOB_APPLICATION_ADDED']),
    },
  },
};

module.exports = resolvers;
