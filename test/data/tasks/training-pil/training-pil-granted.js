module.exports = {
  id: '0ec052e6-01b1-4438-9ef5-8d2188dc5f2b',
  meta: {
    previous: 'with-inspectorate',
    next: 'resolved',
    user: {
      id: '0c3679b6-730e-4ce0-a943-3f9694ab7e9b',
      profile: {
        id: 'a942ffc7-e7ca-4d76-a001-0b5048a057d1',
        migratedId: null,
        userId: '0c3679b6-730e-4ce0-a943-3f9694ab7e9b',
        title: 'Dr',
        firstName: 'Inspector',
        lastName: 'Morse',
        dob: '1985-09-24',
        position: null,
        qualifications: null,
        certifications: null,
        address: null,
        postcode: null,
        email: 'asru-inspector@homeoffice.gov.uk',
        telephone: null,
        notes: null,
        createdAt: '2021-11-01T12:44:18.033Z',
        updatedAt: '2021-11-01T12:44:18.033Z',
        deleted: null,
        asruUser: true,
        asruAdmin: false,
        asruLicensing: false,
        asruInspector: true,
        asruSupport: false,
        telephoneAlt: null,
        pilLicenceNumber: null,
        rcvsNumber: null,
        emailConfirmed: true,
        lastLogin: '2021-11-01T13:13:23.506Z',
        asruRops: false,
        roles: [],
        establishments: [],
        name: 'Inspector Morse'
      }
    },
    payload: {
      status: 'resolved',
      meta: { comment: 'Granted.' },
      changedBy: 'a942ffc7-e7ca-4d76-a001-0b5048a057d1'
    }
  },
  event: 'status:with-inspectorate:resolved',
  comment: 'Granted.',
  status: 'resolved',
  data: {
    id: '85076d2d-00de-4487-9749-a94ffe0445a8',
    data: {
      dob: '2000-01-01',
      email: 'p.parker@example.com',
      lastName: 'Parker',
      firstName: 'Peter',
      trainingNeed: 'Needs training.',
      establishmentId: 54321,
      trainingCourseId: 'b081391c-123d-4639-8198-ec27b199f023'
    },
    meta: {},
    model: 'trainingPil',
    action: 'grant',
    subject: '0c130d97-35f1-455f-b7db-a16ca0a7a2ea',
    changedBy: '084457d6-0f38-43dd-b133-70858ff4b3de',
    modelData: {
      id: '85076d2d-00de-4487-9749-a94ffe0445a8',
      status: 'inactive',
      deleted: null,
      profile: {
        id: '0c130d97-35f1-455f-b7db-a16ca0a7a2ea',
        dob: '2000-01-01',
        pil: null,
        name: 'Peter Parker',
        email: 'p.parker@example.com',
        notes: null,
        title: null,
        userId: null,
        address: null,
        deleted: null,
        asruRops: false,
        asruUser: false,
        lastName: 'Parker',
        position: null,
        postcode: null,
        asruAdmin: false,
        createdAt: '2021-11-01T12:55:28.261Z',
        firstName: 'Peter',
        lastLogin: null,
        telephone: null,
        updatedAt: '2021-11-01T12:55:28.261Z',
        migratedId: null,
        rcvsNumber: null,
        asruSupport: false,
        telephoneAlt: null,
        trainingPils: [
          {
            id: '85076d2d-00de-4487-9749-a94ffe0445a8',
            status: 'inactive',
            deleted: null,
            createdAt: '2021-11-01T12:55:28.261Z',
            issueDate: null,
            profileId: '0c130d97-35f1-455f-b7db-a16ca0a7a2ea',
            updatedAt: '2021-11-01T12:55:28.261Z',
            expiryDate: null,
            trainingNeed: 'Needs training.',
            revocationDate: null,
            trainingCourse: {
              id: 'b081391c-123d-4639-8198-ec27b199f023',
              title: 'Training course to add participants to',
              deleted: null,
              project: {
                title: 'Training project 1',
                licenceNumber: 'PR250147'
              },
              species: [ 'Mice', 'Rats' ],
              createdAt: '2021-11-01T12:44:18.992Z',
              projectId: '56763107-6430-43a1-841d-ad2ecf4196ad',
              startDate: '2025-01-01',
              updatedAt: '2021-11-01T12:44:18.992Z',
              establishment: { name: 'Training Establishment' },
              establishmentId: 54321
            },
            trainingCourseId: 'b081391c-123d-4639-8198-ec27b199f023'
          }
        ],
        asruInspector: false,
        asruLicensing: false,
        certifications: null,
        emailConfirmed: false,
        qualifications: null,
        pilLicenceNumber: null
      },
      createdAt: '2021-11-01T12:55:28.261Z',
      issueDate: null,
      profileId: '0c130d97-35f1-455f-b7db-a16ca0a7a2ea',
      updatedAt: '2021-11-01T12:55:28.261Z',
      expiryDate: null,
      trainingNeed: 'Needs training.',
      revocationDate: null,
      trainingCourse: {
        id: 'b081391c-123d-4639-8198-ec27b199f023',
        title: 'Training course to add participants to',
        deleted: null,
        project: { title: 'Training project 1', licenceNumber: 'PR250147' },
        species: [ 'Mice', 'Rats' ],
        createdAt: '2021-11-01T12:44:18.992Z',
        projectId: '56763107-6430-43a1-841d-ad2ecf4196ad',
        startDate: '2025-01-01',
        updatedAt: '2021-11-01T12:44:18.992Z',
        establishment: { name: 'Training Establishment' },
        establishmentId: 54321
      },
      trainingCourseId: 'b081391c-123d-4639-8198-ec27b199f023'
    },
    establishmentId: 54321,
    initiatedByAsru: false
  },
  assignedTo: null,
  req: '02186ba1-ee4a-4ffd-b67a-cd8761184834'
};