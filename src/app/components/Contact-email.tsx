import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactEmailProps = {
  message: string;
  email: string;
};

export default function ContactEmail({ message, email }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message From Portfolio Site</Preview>
      <Tailwind>
        <Body className="bg-slate-200 text-black">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4 roundedn-md ">
              <Heading className="leading-tight">
                You recieved the following message
              </Heading>
              <Text className="font-thin">{message}</Text>
              <Hr />
              <Text>{`Sender: ${email}`}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
