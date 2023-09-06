# OneBitCoin - React Native com Expo

Este é um projeto de estudo de React Native com Expo. Neste repositório, você encontrará um aplicativo simples criado usando o framework React Native e o ambiente de desenvolvimento Expo. Este projeto serve como um ponto de partida para iniciantes que desejam aprender React Native e Expo.

Foi desenvolvido com os videos do canal **[One Bit Code](https://www.youtube.com/@OneBitCode)**.

Playlist completa: **[Curso React NAtive (Aprendiz)](https://www.youtube.com/playlist?list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_)**

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Um emulador de dispositivo móvel ou um dispositivo físico para testar o aplicativo.

## Como começar do zero

1. Abra o seu prompt favorito, navegue até a pasta onde pretende criar o seu aplicativo e execute o comando abaixo:

   ```bash
   npx create-expo-app onebitcoin
   ```

2. Navegue até o diretório do projeto:

    ```bash
    cd onebitcoin
    ```
3. Instale as dependências para a criação dos gráficos:

    ```bash
    npm i react-native-chart-kit
    npm i react-native-svg
    ```
4. Inicie o servidor Expo:
    
    ```bash
    npx expo start
    ```
5. Abra o aplicativo Expo Go em seu dispositivo móvel ou siga as instruções no terminal para abrir o aplicativo no emulador.

6. Agora você deve ver o aplicativo sendo executado no seu dispositivo ou emulador.

## Estrutura do Projeto

* App.js: Este é o ponto de entrada do aplicativo, onde a navegação e os componentes principais são configurados.

* components/: Este diretório contém os componentes reutilizáveis do aplicativo.

* img/: Este diretório contém as imagens do aplicativo.

* screens/: Este diretório contém as diferentes telas do aplicativo.

## Building do App com Expo para Android

Primeiro foram criadas as imagens Splash para o App, utilizando os exemplos que estavam na pasta assets.

Em seguida, no arquivo app.json foram alterados os campos:

* Cores de fundo
    
    ```json
    "splash": {
        "backgroundColor": "#000000"
        },

    "android": {
        "adaptiveIcon": {
            "backgroundColor": "#000000"
        }
    },
    ```
* Pacote e versão
    
    ```json
    "expo": {
        "package": "com.onebitcode.onebitcoin",
        "versionCode": 1
    }
    ```

Para gerar os arquivos necessários para o build do projeto, com a possibilidade de exportação para a Play Store, execute os comandos:

* Instale o último EAS CLI

    ```
    npm install -g eas-cli
    ```

* Faça login na sua conta Expo
   
    ```
    expo login
    ```

* Configure o projeto

    ```
    eas build:configure
    ```

* Faça a build

    ```
    eas build --platform android
    ```


## Contribuição

Sinta-se à vontade para contribuir para este projeto, fazendo um fork do repositório e enviando pull requests. Toda contribuição é bem-vinda!

## Licença

Este projeto está sob a licença MIT License.
