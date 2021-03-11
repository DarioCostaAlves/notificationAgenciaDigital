Manual de Instruções:
**Começar a usar React Native Sem a framwork Expo(mais difícil)**
- Instalar na nossa máquina o **NPM (Node Package Manager)- VERSÃO MAIS RECENTE**
pois é um package manager para Javascript e vamos utilizar comandos
dele na cmd.
- Instalar https://chocolatey.org/ que é outro package manager necessário
- Abrir como administrador o cmd e executar o comando : **choco install -y nodejs.install openjdk8**
- *Comando anterior vai instalar o JDK e o Node se não tivermos*
- Na pasta onde queremos o nosso projeto ReactNative executar o comando: npx react-native init nameOfProject

- Para o emulador funcionar temos de instalar o android studio e criar um novo emulador para testas as apps
- **npx react-native start** - Inicia o localhost
- **npx react-native run-android** - Inicia o android emulator , se tivermos tudo bem configurado



**Notificações com o ReactNative e Onesignal+Firebase Keys**

- Criar uma  conta no **OneSignal e na Firebase**
---------------------- | ------------------------
- Adicionar um projeto na **Firebase**
- Criar uma nova App / Website no **OneSignal**
 escolher a plataforma que queremos(android/ios/web)
- Firebase Server Key e Firebase Sender ID  temos de ir buscar ao Projeto Do firebase criado- Configurações do projeto/Cloud Messaging
- https://documentation.onesignal.com/docs/react-native-sdk-setup - Seguir a documentação detalhadamente
