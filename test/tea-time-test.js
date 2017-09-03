const Helper = require('hubot-test-helper');
const helper = new Helper('../src/tea-time.js');


const co = require('co');
const { expect } = require('chai');

describe('hello-world', function() {

  beforeEach(function() {
    return this.room = helper.createRoom();
  });

  afterEach(function() {
    return this.room.destroy();
  });

  return context('user says tea time to hubot', function() {
    beforeEach(function() {
      return co(function*() {
        yield this.room.user.say('alice', 'tea time');
        return yield this.room.user.say('bob', '@hubot tea');
      }.bind(this));
    });

    return it('should reply to user', function() {
      return expect(this.room.messages).to.eql([
        ['alice', 'tea time'],
        ['hubot', 'Right-O, Chap! Jolly Good!'],
        ['bob',   '@hubot tea'],
        ['hubot', '@bob You\'re tea-riffic!']
      ]);
  });
});
});