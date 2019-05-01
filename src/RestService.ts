import rp = require('request-promise-native');

export class RestService {
    public static async restGet(url: string) {
        var options = {
            //url: http://www.mocky.io/v2/5cc954fc310000dc0c12cc9c
            uri: url,
            json: true, // Automatically parses the JSON string in the response
            resolveWithFullResponse: true
        };

        return rp(options);
    }
}