import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { send, EmailJSResponseStatus } from '@emailjs/react-native';

export const ContactForm = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const SERVICE_ID = process.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = process.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.PUBLIC_KEY;

  const onSubmit = async () => {
    try {
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          email,
          message: 'This is a static message',
        },
        {
          publicKey: PUBLIC_KEY,
        },
      );

      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EmailJS Request Failed...', err);
      }

      console.log('ERROR', err);
    }
  };

  return (
    <View>
      <TextInput
        inputMode="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        inputMode="text"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};