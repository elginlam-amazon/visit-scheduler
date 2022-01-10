import { Construct } from "@aws-cdk/core";
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import * as apigwv2 from '@aws-cdk/aws-apigatewayv2'
import * as lambda from '@aws-cdk/aws-lambda'
import * as path from 'path'

export default class LambdaConstructs extends Construct { 

    public readonly proxyFunction : lambda.Function

    constructor(scope:Construct,id:string){
        super(scope,id)

        console.log(`Trying to find lambda at ${path.join(__dirname, '../../../lambdas/src/ApiProxy/dist')}`)

         this.proxyFunction = new lambda.Function(this, 'proxyFn', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '../../../lambdas/src/ApiProxy/dist')),
          })
    }
}