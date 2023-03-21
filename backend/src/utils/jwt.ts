import * as jose from 'jose';

const secret = new TextEncoder().encode(process.env.PRIVATE_KEY);

export const signJWT = async (id: string) => {
  return await new jose.SignJWT({ id }).setProtectedHeader({ alg: 'HS256' }).setExpirationTime('6h').sign(secret);
};

export const verifyJWT = async (jwt: string) => {
  return await jose.jwtVerify(jwt, secret);
};
