const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('time')
        .setDescription('Display time')
        .addIntegerOption(option =>
            option.setName('hour')
                .setDescription('Hour')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('minute')
                .setDescription('Minute')
                .setRequired(true)),



    async execute(interaction) {
        const hour = interaction.options.getInteger('hour');
        const minute = interaction.options.getInteger('minute');
        //let pr = new Date(Date.parse('' + hour + ':' + minute + ''));
        let pr = new Date(2020, 2, 1);
        let unixtime = pr.getTime();
        return interaction.reply('<t:' + unixtime + ':R>');

    },
};