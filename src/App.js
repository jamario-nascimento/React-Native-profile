import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub =
  'https://media-exp2.licdn.com/dms/image/C4D03AQG8e5g7xSecLw/profile-displayphoto-shrink_400_400/0/1626974811114?e=1661385600&v=beta&t=y7pJYOkF4CJHJkdqQ5jwdGXFvW5Odq58-5f-4ub7ztI';
const urlToMyGithub = 'https://www.linkedin.com/in/jamario-nascimento/';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Jamarioandando"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Jamario Nascimento"
          style={[style.defaultText, style.name]}>
         Jamario Nascimento
        </Text>
        <Text
          accessibilityLabel="Nickname: /jamario-nascimento"
          style={[style.defaultText, style.nickname]}>
          jamario-nascimento
        </Text>
        <Text
          accessibilityLabel="Descrição: Desenvolvedor Front-End | Angular | PHP | UX UI | HTML | CSS | Java Script | Java Developer | estudando Inglês."
          style={[style.defaultText, style.description]}>
          Desenvolvedor Front-End | Angular | PHP | UX UI | HTML | CSS | Java Script | Java Developer | estudando Inglês.
        </Text>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    // Column
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
