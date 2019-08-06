"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "ProposalStatus",
    embedded: false
  },
  {
    name: "ConversationType",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "NotificationBody",
    embedded: false
  },
  {
    name: "Notification",
    embedded: false
  },
  {
    name: "AttachmentType",
    embedded: false
  },
  {
    name: "Attachment",
    embedded: false
  },
  {
    name: "Conversation",
    embedded: false
  },
  {
    name: "MessageType",
    embedded: false
  },
  {
    name: "Text",
    embedded: false
  },
  {
    name: "Freelancer",
    embedded: false
  },
  {
    name: "Skill",
    embedded: false
  },
  {
    name: "Education",
    embedded: false
  },
  {
    name: "LanguageSkill",
    embedded: false
  },
  {
    name: "Experience",
    embedded: false
  },
  {
    name: "Portfolio",
    embedded: false
  },
  {
    name: "Certification",
    embedded: false
  },
  {
    name: "Publication",
    embedded: false
  },
  {
    name: "Employer",
    embedded: false
  },
  {
    name: "Company",
    embedded: false
  },
  {
    name: "Contact",
    embedded: false
  },
  {
    name: "Job",
    embedded: false
  },
  {
    name: "NeedSkill",
    embedded: false
  },
  {
    name: "employerInvitedFreelancer",
    embedded: false
  },
  {
    name: "ProposalType",
    embedded: false
  },
  {
    name: "Proposal",
    embedded: false
  },
  {
    name: "EmployerShortList",
    embedded: false
  },
  {
    name: "FreelancerShortList",
    embedded: false
  },
  {
    name: "Hire",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "ListOfProject",
    embedded: false
  },
  {
    name: "PaymentTypeForTask",
    embedded: false
  },
  {
    name: "TaskStatus",
    embedded: false
  },
  {
    name: "PaymentForTask",
    embedded: false
  },
  {
    name: "Task",
    embedded: false
  },
  {
    name: "Assign",
    embedded: false
  },
  {
    name: "Interview",
    embedded: false
  },
  {
    name: "Offer",
    embedded: false
  },
  {
    name: "paymentTypeOffer",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "StatusOffer",
    embedded: false
  },
  {
    name: "FreelancerShortListStatus",
    embedded: false
  },
  {
    name: "HIRE_STATUS",
    embedded: false
  },
  {
    name: "TASK_STATUS",
    embedded: false
  },
  {
    name: "PROJECT_STATUS",
    embedded: false
  },
  {
    name: "Test",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/server_test/dev`
});
exports.prisma = new exports.Prisma();
