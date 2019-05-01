import { RestService } from "./RestService";

export class AsyncAction {
    public static async invokeGet(url: string) {
        return RestService.restGet(url);
    }
}