import axios from 'axios'
import * as qs from 'qs'

import { getRandomString, pickQueryStringItemFromUrl } from '../utils'

export interface RequestTokenArgs {
  issuerUrl: string
  grantType: 'authorization_code' | 'refresh_token'
  clientId: string
  refreshToken?: string
  redirectUri?: string
  code: string
}

export interface RequestTokenResponseData {
  access_token: string
  expires_in: number
  refresh_token: string
  id_token: string
  error?: string
}

export const requestToken = async ({
  issuerUrl,
  refreshToken,
  code,
  grantType,
  redirectUri,
  clientId,
}: RequestTokenArgs) => {
  try {
    const queryString = qs.stringify({
      code,
      refresh_token: refreshToken,
      grant_type: grantType,
      redirect_uri: redirectUri,
      client_id: clientId,
    })

    return await axios.post<RequestTokenResponseData>(
      `${issuerUrl}/token?${queryString}`,
      undefined,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
  } catch (e) {
    throw e
  }
}

export interface GetLogInUrlArgs {
  issuerUrl: string
  clientId: string
  redirectUrl?: string
  scopes: string[]
}

export const getLogInUrl = ({
  clientId,
  redirectUrl,
  scopes,
  issuerUrl,
}: GetLogInUrlArgs) => {
  const params = {
    client_id: clientId,
    redirect_uri: redirectUrl,
    scopes,
    response_type: 'code',
    response_mode: 'query',
    state: getRandomString(),
    nonce: getRandomString(),
  }

  return `${issuerUrl}/auth?${qs.stringify(params, { arrayFormat: 'comma' })}`
}

export interface GetLogOutUrlArgs {
  issuerUrl: string
  idToken: string
  redirectUrl?: string
}

export const getLogOutUrl = ({
  issuerUrl,
  redirectUrl,
  idToken,
}: GetLogOutUrlArgs) => {
  const url = `${issuerUrl}/sessions/logout?post_logout_redirect_uri=${redirectUrl}&state=${getRandomString()}&id_token_hint=${idToken}`
  return url
}

export const getLoginChallenge = async (args: GetLogInUrlArgs) => {
  const response = await axios.get<string>(getLogInUrl(args))
  return pickQueryStringItemFromUrl(response.data, 'login_challenge')
}
