/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('speech', 'v1', () => {
        /** now we can use gapi.client.speech */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /**
         * Starts asynchronous cancellation on a long-running operation.  The server
         * makes a best effort to cancel the operation, but success is not
         * guaranteed.  If the server doesn't support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
         * Operations.GetOperation or
         * other methods to check whether the cancellation succeeded or whether the
         * operation completed despite cancellation. On successful cancellation,
         * the operation is not deleted; instead, it becomes an operation with
         * an Operation.error value with a google.rpc.Status.code of 1,
         * corresponding to `Code.CANCELLED`.
         */
        await gapi.client.operations.cancel({
            name: "name",
        });
        /**
         * Deletes a long-running operation. This method indicates that the client is
         * no longer interested in the operation result. It does not cancel the
         * operation. If the server doesn't support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.
         */
        await gapi.client.operations.delete({
            name: "name",
        });
        /**
         * Gets the latest state of a long-running operation.  Clients can use this
         * method to poll the operation result at intervals as recommended by the API
         * service.
         */
        await gapi.client.operations.get({
            name: "name",
        });
        /**
         * Lists operations that match the specified filter in the request. If the
         * server doesn't support this method, it returns `UNIMPLEMENTED`.
         *
         * NOTE: the `name` binding allows API services to override the binding
         * to use different resource name schemes, such as `users/&#42;/operations`. To
         * override the binding, API services can add a binding such as
         * `"/v1/{name=users/&#42;}/operations"` to their service configuration.
         * For backwards compatibility, the default name includes the operations
         * collection id, however overriding users must ensure the name binding
         * is the parent resource, without the operations collection id.
         */
        await gapi.client.operations.list({
            filter: "filter",
            name: "name",
            pageSize: 3,
            pageToken: "pageToken",
        });
        /**
         * Performs asynchronous speech recognition: receive results via the
         * google.longrunning.Operations interface. Returns either an
         * `Operation.error` or an `Operation.response` which contains
         * a `LongRunningRecognizeResponse` message.
         */
        await gapi.client.speech.longrunningrecognize({
        });
        /**
         * Performs synchronous speech recognition: receive results after all audio
         * has been sent and processed.
         */
        await gapi.client.speech.recognize({
        });
    }
});
