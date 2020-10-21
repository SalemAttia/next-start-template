import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { UserModel } from '../../api/User'
import { getUser } from '../../lib/api'
import { getAsString } from '../../helper/getAsString'

interface UserDetailsProps {
  user: UserModel | null | undefined
}

export default function SingleUser({ user }: UserDetailsProps) {
  if (!user) {
    return <h1>Sorry, user not found!</h1>
  }

  return (
    <div>
      <Head>
        <title>{user.name + ' ' + user.email}</title>
      </Head>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.name}</li>
        <li>{user.id}</li>
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<UserDetailsProps> = async (
  ctx
) => {
  const id = ctx.params.id
  const user = await getUser(parseInt(getAsString(id)))
  return { props: { user: user || null } }
}
