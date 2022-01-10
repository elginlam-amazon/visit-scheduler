import { Construct } from "@aws-cdk/core";
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import * as apigwv2 from '@aws-cdk/aws-apigatewayv2'
import * as lambda from '@aws-cdk/aws-lambda'

export interface ApiConstructProps{
    proxyFunction : lambda.Function
}

export default class ApiConstruct extends Construct{

    constructor(scope:Construct,id:string,props:ApiConstructProps) {
        super(scope,id);

        const vsApiIntegration = new HttpLambdaIntegration('proxyintegration', props.proxyFunction,{})

        const httpApi = new apigwv2.HttpApi(this, 'HttpApi');

        httpApi.addRoutes({
            path: '/todo',
            methods: [ apigwv2.HttpMethod.GET,apigwv2.HttpMethod.PUT,apigwv2.HttpMethod.POST ],
            integration: vsApiIntegration,
        });

    }


}