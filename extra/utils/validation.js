let users =
  [
    {
      traineeEmail: 'trainee1@successive.tech',
      reviewerEmail: 'reviewer1@successive.tech',
    },
    {
      traineeEmail: 'trainee1@succe.tech',
      reviewerEmail: 'reviewer1@succe.tech',
    },
    {
      traineeEmail: 'trainee1@succe.tech',
      reviewerEmail: 'reviewer1@successive.tech',
    },
    {
      traineeEmail: 'trainee1@successive.tech',
      reviewerEmail: 'reviewer1@succe.tech',
    },
    {
      traineeEmail: 'train@successive.tech',
      reviewerEmail: 'review@successive.tech',
    },
    {
      traineeEmail: 'trainee1@successive.',
      reviewerEmail: 'reviewer1@successive.',
    },
    {
      traineeEmail: 'trainee1',
      reviewerEmail: 'reviewer1',
    },
  ];

  validateUsers(users);



function validateEmail(email) {
  let val1 = /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;
    return (val1.test(email)) ? true : false;
}

function validateUsers(argvUsers) {
  let validCount = 0;
  let inValidCount = 0;
  argvUsers.forEach((value, index) => { //used array methods to iterate over an array.
    const { traineeEmail, reviewerEmail } = value; //used destructuring for fetching object properties.
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      validCount++;
    } else {
      inValidCount++;
    }
    // console.log(value.traineeEmail+ " :  is " + validateEmail(value.traineeEmail));
    // console.log(value.reviewerEmail+ " :  is " + validateEmail(value.reviewerEmail));
  })
  console.log('Valid user count: '+ validCount);
  console.log('Invalid user count: '+ inValidCount);
}
