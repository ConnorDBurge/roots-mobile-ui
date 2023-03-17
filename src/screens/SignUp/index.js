import { Text } from "native-base";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useForm } from "react-hook-form";

import { Header, Link, TextInput, Checkbox, Button } from "../../components";

export const SignUp = () => {
  const { control, handleSubmit, watch } = useForm();
  const password = watch("password");

  const onSignUp = (data) => {
    console.log({ data });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        style={styles.header}
        title={"Sign Up"}
        prompt={"Already have an account?"}
        link={<Link style={styles.link} text={"Log in"} href={"/"} />}
      />
      <TextInput control={control} label={"First Name"} name={"first_name"} />
      <TextInput
        control={control}
        label={"Email"}
        name={"email"}
        rules={{
          required: "Enter an email",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Enter a valid email",
          },
        }}
      />
      <TextInput
        secure
        control={control}
        name={"password"}
        label={"Password"}
        rules={{
          required: "Choose a password",
          minLength: {
            value: 8,
            message: "Use 8 or more characters",
          },
        }}
      />
      <TextInput
        secure
        control={control}
        name={"confirm_password"}
        label={"Confirm Password"}
        rules={{
          required: "Confirm your password",
          validate: (val) => val === password || "Passwords do not match",
        }}
        helperText={
          "Use 8 or more characters with a mix of letters, numbers, and symbols."
        }
      />
      <Checkbox
        control={control}
        name={"terms"}
        label={
          <Text style={styles.checkboxLabel}>
            I agree to the{" "}
            <Link style={styles.inlineLink} text={"Terms"} href="/" /> and{" "}
            <Link style={styles.inlineLink} text={"Privacy Policy"} href="/" />
          </Text>
        }
        style={styles.checkbox}
        rules={{ required: true }}
      />
      <Button
        style={styles.button}
        onPress={handleSubmit(onSignUp)}
        text={"Sign Up"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 20,
    marginBottom: 22,
  },
  header: {
    marginBottom: 15,
  },
  checkboxLabel: {
    color: "#9CA5B4",
  },
  inlineLink: { fontWeight: "700", color: "#9CA5B4" },
  link: { color: "#0071DF", fontWeight: "700", fontSize: 13 },
  checkbox: {
    marginTop: 30,
    fillColor: "#03A87C",
    borderColor: "#5E656F",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#03A87C",
    borderRadius: 2,
    height: 50,
    fontWeight: 700,
    color: "#FFFFFF",
    fontSize: 16,
  },
});
