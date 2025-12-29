'use client'

import useLoginGoogleOauth from "../../../../hooks/useLogin"

export default function GoogleCallbackPage() {
  useLoginGoogleOauth()
  return <p className="text-center mt-10">Logging you in...</p>
}
