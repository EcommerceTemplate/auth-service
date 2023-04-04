const amqp = require('amqplib/callback_api');

const options = {
    clientProperties:
    {
        connection_name: 'producer-service'
    }
};

amqp.connect('amqp://rabbitmquser:rabbitmqpass@localhost', options, (error, connection) => {
    if (error) {
        throw err;
    }

    connection.createChannel((connErr, channel) => {
        if (connErr) {
            throw connErr;
        }

        channel.assertQueue('test_queue', { durable: true });

        channel.prefetch(1);

        channel.consume('test_queue', (msg) => {
            console.log(msg.content.toString());

            setTimeout(() => {
                channel.ack(msg);
                connection.close();
                process.exit(0);
            }, 500);
        });
    });
});