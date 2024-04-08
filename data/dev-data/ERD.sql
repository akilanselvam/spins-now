CREATE TABLE `Community` (
  `createdBy` ObjectId,
  `projectId` ObjectId,
  `title` String,
  `description` String,
  `date` Date,
  `location` String,
  `organizer` String,
  `attendees` String,
  `createdAt` Date
);

CREATE TABLE `Expert` (
  `userId` ObjectId,
  `fullName` String,
  `expertiseAreas` String,
  `bio` String,
  `contactDetails` Array,
  `availability` Mixed,
  `createdAt` Date
);

CREATE TABLE `Problem` (
  `problemId` Number,
  `communityId` ObjectId,
  `title` String,
  `description` String,
  `category` String,
  `urgency` Enum,
  `impactPotential` Enum,
  `status` Enum,
  `submittedBy` ObjectId,
  `createdAt` Date
);

CREATE TABLE `Collaboration` (
  `problemId` ObjectId,
  `users` ObjectId,
  `workspace` String,
  `discussions` String,
  `documents` String,
  `createdAt` Date,
  FOREIGN KEY (`problemId`) REFERENCES `Problem`(`problemId`)
);

CREATE TABLE `Feedback` (
  `feedbackText` String,
  `userId` ObjectId,
  `timestamp` Date,
  `createdAt` Date
);

CREATE TABLE `Resource` (
  `communityId` ObjectId,
  `title` String,
  `description` String,
  `category` String,
  `uploader` ObjectId,
  `uploadDate` Date,
  `file` String,
  `createdAt` Date
);

CREATE TABLE `Project` (
  `createdBy` ObjectId,
  `title` String,
  `description` String,
  `goals` Array,
  `milestones` Array,
  `timelines` Object,
  `progress` Mixed,
  `impactMeasurement` Mixed,
  `teamMembers` ObjectId,
  `createdAt` Date
);

CREATE TABLE `User` (
  `username` String,
  `email` String,
  `password` String,
  `firstName` String,
  `lastName` String,
  `phoneNumber` String,
  `state` String,
  `country` String,
  `age` Number,
  `sex` String,
  `skills` Array,
  `expertise` Array,
  `areasOfInterest` Array,
  `expert` String
);

