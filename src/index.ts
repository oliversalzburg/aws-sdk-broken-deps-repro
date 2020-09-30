import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, S3ClientConfig, GetObjectCommand, GetObjectRequest } from "@aws-sdk/client-s3";

export default async () => {
	const configuration: S3ClientConfig = { region: "eu-central-1" };
	const client = new S3Client(configuration);
	const request: GetObjectRequest = {
		Bucket: "images",
		Key: "lul",
	};
	const command = new GetObjectCommand(request);
	const url = await getSignedUrl(client, command, { expiresIn: 3600 });
};
