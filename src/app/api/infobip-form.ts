import type { FormSubmitResponse } from '../types/form-submit-response';

const VITE_API_KEY = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_KEY) || '';

export default async function InfobipSubmitForm (name: string, prenom: string, email: string, telephone: string, type: string, message: string): Promise<FormSubmitResponse> {

  let result : FormSubmitResponse;

  const url =
  "https://api2.infobip.com/moments/1/flows/200000038011957/participants";

  const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': `App ${VITE_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        participants: [
          {
            identifyBy: {
              identifier: email,
              type: "EMAIL"
            },
            variables: {
              formMessage: message,
            },
            person: {
              firstName: name,
              lastName: prenom,
              type: "LEAD",
              tags: ["Infynova Lead"],
              customAttributes: {
                "Event Type": type,
                "Event Form Message": message
              },
              contactInformation: {
                email: [
                  {
                    address: email
                  }
                ],
                phone: [
                  {
                    number: telephone
                  }
                ]
              }
            }
          }
        ]
    }),
  });


  result = await res.json();

  return result;

}