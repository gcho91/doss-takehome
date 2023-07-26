import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const BASE_URL = 'http://localhost:8080'

/** The API for the app, for querying, creating and updating workspaces */
class DosspaceApi {
  /** Returns the ID and title of every existing workspace */
  static async getWorkspaces() {
    try {
      const req = await axios.get(BASE_URL)
      const { workspaces } = req.data
      return workspaces
    } catch (err) {
      throw new Error('Unable to fetch workspaces')
    }
  }
  static async getWorkspace(workspaceId: string) {
    try {
      const req = await axios.get(BASE_URL + '/' + workspaceId)
      const { workspace } = req.data
      return workspace
    } catch (err) {
      throw new Error('Unable to fetch table Data')
    }
  }

  static async createWorkspace() {
    try {
      const req = await axios.post(BASE_URL + "/");
      const { workspace } = req.data;
      return workspace;
    } catch (err) {
      throw new Error('Unable to create workspace')
    }
  }

  static async updateWorkspace(id: string) {
    /** Updates workspace of given ID and returns it */
    try {
      const req = await axios.post(BASE_URL + "/" + id, {
        workspace: {
          id: id,
          title: "TEEEEEEST",
          buildShipments: [
            {
              id: uuidv4(),
              buildNumber: '',
              shipments: [{ id: uuidv4(), description: 'adshfajdfsafd 7777777777', orderNumber: '', cost: 77777777 }],
            },
          ],
        }
      });
      console.log(req, "req")
      const { workspace } = req.data;
      return workspace;
    } catch (err) {
      throw new Error('Unable to UPDATE workspace')
    }
  }
}

export default DosspaceApi
