import { PayloadSDK } from '@payloadcms/sdk'

export default new PayloadSDK({
  baseURL: import.meta.env.PAYLOAD_BASE_URL,
  baseInit: {
    headers: {
      "Authorization": `users API-Key ${import.meta.env["SECRET_PAYLOAD_API_KEY"]}`
    }
  }
});