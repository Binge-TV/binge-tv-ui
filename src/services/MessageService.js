import { callExternalApi } from "./external-api.service";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

class MessageService {

    getPublicResource = async () => {
        const config = {
          url: `${apiServerUrl}/api/messages/public`,
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        };
        
        const { data, error } = await callExternalApi({ config });
      
        return {
          data: data || null,
          error,
        };
      };

      getProtectedResource = async () => {
        const config = {
          url: `${apiServerUrl}/api/messages/protected`,
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        };
      
        const { data, error } = await callExternalApi({ config });
      
        return {
          data: data || null,
          error,
        };
      };

      getAdminResource = async () => {
        const config = {
          url: `${apiServerUrl}/api/messages/admin`,
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        };
      
        const { data, error } = await callExternalApi({ config });
      
        return {
          data: data || null,
          error,
        };
      };
}

export default new MessageService();