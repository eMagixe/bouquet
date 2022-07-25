import { fetchFlowers } from "../api";

class FlowerManager {
  async getAllFlowers() {
    return await fetchFlowers();
  }
}

export default FlowerManager;
