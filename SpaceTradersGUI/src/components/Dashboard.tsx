
import {useQuery} from 'react-query'
import Nav from './Nav';

const Test = () => {


  const fetchAgentDetails = async () => {
    const options = {
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiQ0FTUEVSX0xBU1MiLCJpYXQiOjE2ODM1NjMzMzEsInN1YiI6ImFnZW50LXRva2VuIn0.Il45RSErwxQs1xEfzR25EheWYlcc0egir9ijbVZLNnVvaS7pPiDerAzIDkDrPqz6y_oS9dwPcsid_RnTRXY2ucNwapnZG7wZnMJBq8cy8Hn3ObfEgC7bo6cEHIfgOpgtAPwji26nYCi6lE4VHPVG3hcZ3uz7zct0dobtsvvMK-wS6MiGC6hxC4qWYG-nB-y8jpFHMDyP9fj0CvY9w4q1ZJ2p-ZQ44wz8xyjM8nYPeVPAc3wfEHcuNAyUi8Q-DmTfFvykO2-VRen_URtjEP9BqcpD_CDMwFvwUev-hMq2-6PlwyFGioI5SDVKbdKLNKhADHFM4KdVKYtikWIokjDOVVEjiotwxJ2dpHHW2WqY5wao2qBQuVgIyzFbxS1rT2RDH45r49osfSlSMUryX4utQdBzKpJB2p_fK0VZzBW1tNXmQ4aPaSkjZUtH0do1hq5RmGSDm6pSXDxWrVJxCBFZt31OMa0k9MQUHskNFudT0pOdem0zewSzSMfTI7iKph8a",
			},
		};

		const data = await fetch("https://api.spacetraders.io/v2/my/agent", options)
    return data.json()
  }

  const {data, error, isLoading} = useQuery('agentDetails', fetchAgentDetails)

  if (error) return <div>Request Failed</div>
  if (isLoading) return <div>Loading...</div>

  return (
		<>
		<Nav />
			<div>
				<p></p>
				<h1>Welcome back, {data?.data?.symbol}</h1>
				<h3>Headquarters: {data?.data?.headquarters}</h3>
				<p>Credits: {data?.data?.credits}</p>
			</div>
		</>
	);
}

export default Test