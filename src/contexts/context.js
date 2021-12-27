import React from 'react';

const MemberContext = React.createContext({
    image: '',
    first: '',
    last: '',
    age: '',
    phone: '',
    email: '',
    dob: '',
    location: '',
})

export default MemberContext;