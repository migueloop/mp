

Create a default Message using **defineMessages** this will create a entry on the missing folder, this way
 we can send to the translator this files. 

    const messages = defineMessages({
      greeting: {
        id: 'greeting',
        description: 'Welcome greeting to the user',
        defaultMessage: 'Hello {name}, you {messageCount, plural, =0 {don't have messages} one {have 1 message} other {have {messageCount} messages}}',
      }
    });

Example

    <FormattedMessage values={{name : 'John', messageCount : this.state.messages}} {...messages.greeting} />
        
        
To create a default language file run

    npm run build-i18n
