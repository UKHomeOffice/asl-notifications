module.exports = {
  id: 'c174f8e8-2fe4-4bd5-b8f6-9ab48a1d8863',
  meta: {
    previous: 'new',
    next: 'awaiting-endorsement',
    user: {
      id: 'f4c6fe14-15b4-403b-89e6-7e31913284c1',
      profile: {
        id: '304235c0-1a83-49f0-87ca-b11b1ad1e147',
        title: 'Mr',
        firstName: 'Basic',
        lastName: 'User',
        email: 'basic.user@example.com',
        asruUser: false,
        asruAdmin: false,
        asruLicensing: false,
        asruInspector: false,
        asru: [],
        roles: [],
        establishments: [{
          id: 8201,
          migratedId: '8201',
          name: 'University of Croydon',
          status: 'active',
          role: 'basic'
        },
        {
          id: 8202,
          migratedId: '8202',
          name: 'Marvell Pharmaceutical',
          status: 'active',
          role: 'basic'
        }],
        name: 'Basic User'
      }
    },
    payload: {
      data: {
        establishmentId: 8201,
        licenceHolderId: '304235c0-1a83-49f0-87ca-b11b1ad1e147'
      },
      meta: {
        awerb: 'Not yet',
        ready: 'No',
        version: '6e237195-d206-48f7-955e-46edc244cb4c'
      },
      model: 'project',
      id: 'af2b01a1-1ed8-44d9-985f-dd77ccf65d5f',
      action: 'grant',
      changedBy: '304235c0-1a83-49f0-87ca-b11b1ad1e147'
    }
  },
  event: 'status:new:awaiting-endorsement',
  status: 'awaiting-endorsement',
  data: {
    id: 'af2b01a1-1ed8-44d9-985f-dd77ccf65d5f',
    data: {
      version: '6e237195-d206-48f7-955e-46edc244cb4c',
      establishmentId: 8202,
      licenceHolderId: '304235c0-1a83-49f0-87ca-b11b1ad1e147'
    },
    meta: {
      awerb: 'Not yet',
      ready: 'No',
      version: '6e237195-d206-48f7-955e-46edc244cb4c'
    },
    model: 'project',
    action: 'transfer',
    subject: '304235c0-1a83-49f0-87ca-b11b1ad1e147',
    changedBy: '304235c0-1a83-49f0-87ca-b11b1ad1e147',
    modelData: {
      id: 'af2b01a1-1ed8-44d9-985f-dd77ccf65d5f',
      title: 'Transfer project',
      status: 'active',
      deleted: null,
      createdAt: '2019-12-12T15:20:00.251Z',
      issueDate: '2019-12-12T15:20:00.251Z',
      updatedAt: '2019-12-12T15:20:32.191Z',
      expiryDate: null,
      migratedId: null,
      amendedDate: null,
      licenceNumber: null,
      schemaVersion: 1,
      revocationDate: null,
      establishmentId: 8201,
      licenceHolderId: '304235c0-1a83-49f0-87ca-b11b1ad1e147'
    },
    establishmentId: 8202
  },
  req: '82e819db-bf29-41c3-a258-d0e7060a75bd'
};
