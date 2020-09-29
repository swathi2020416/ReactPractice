import React from 'react'

const Usercontext=React.createContext('CodeEvolution')

const UserProvider=Usercontext.Provider
const UserConsumer=Usercontext.Consumer


export{UserProvider,UserConsumer}
export default Usercontext