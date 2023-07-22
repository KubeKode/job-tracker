const { buildSchema } = require("graphql");

const typeDefs = buildSchema(`
  type JobApplication {
    id: ID!
    company: String!
    status: String!
  }

  type Query {
    jobApplications: [JobApplication]
  }

  type Mutation {
    addJobApplication(company: String!, status: String!): JobApplication
  }

  type Subscription {
    jobApplicationAdded: JobApplication
  }
`);

module.exports = typeDefs;
