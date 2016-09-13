import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import proxyquire from 'proxyquire';

chai.use(sinonChai);

describe('Plugin', () => {
    const replaceSpy = sinon.spy();

    const Plugin = proxyquire('../src/index.js', {
        replace: replaceSpy
    });

    const run = (config) => {
        const webpackMockCompiler = {
            plugin: sinon.spy()
        };
        const plugin = new Plugin(config);
        plugin.apply(webpackMockCompiler);
        const doneCallback = webpackMockCompiler.plugin.args[0][1];
        doneCallback();
    };

    it('should exit if no path is specified', () => {
        const pluginConfig = {
            indexPath: false
        };
        run(pluginConfig);
        expect(replaceSpy).not.calledWith();
    });

    it('should replace path with $1?_t=[timestamp] hash', () => {
        const pluginConfig = {
            indexPath: true
        };
        run(pluginConfig);
        const originExp = replaceSpy.args[0][0].replacement;
        const regExp = /\$1\?_t=\d+/;
        expect(regExp.test(originExp)).to.equal(true);
    });

    it('should replace provided files by replace util call', () => {
        const pluginConfig = {
            indexPath: true
        };
        run(pluginConfig);
        expect(replaceSpy).calledWith(sinon.match.object);
    });
});
