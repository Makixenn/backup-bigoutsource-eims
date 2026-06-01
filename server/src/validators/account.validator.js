export const createAccountValidator = {
  name: { required: true, type: 'string', min: 2 },
  accountType: { required: true, type: 'string', enum: ['internal', 'external'] },
};

export const updateAccountValidator = {
  name: { required: true, type: 'string', min: 2 },
  accountType: { required: false, type: 'string', enum: ['internal', 'external'] },
};
