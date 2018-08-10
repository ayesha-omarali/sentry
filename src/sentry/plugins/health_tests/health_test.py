from __future__ import absolute_import


class TestRunner(object):
    def __init__(self):
        pass

    def run_test(self, path):

        from django.conf import settings
        middleware = settings.MIDDLEWARE_CLASSES
        if 'sentry.middleware.sudo.SudoMiddleware' not in middleware:
            middleware += ('sentry.middleware.sudo.SudoMiddleware', )
            settings.MIDDLEWARE_CLASSES = tuple(middleware)
        if not settings.SOUTH_TESTS_MIGRATE:
            settings.SOUTH_TESTS_MIGRATE = True
            settings.INSTALLED_APPS += ('south',)
        # test_results = pytest.main(['tests/acceptance/test_plugin_health.py'])
        import pytest
        test_results = pytest.main([path])
        print('TEST!!!', test_results)

        # from subprocess import call
        # # call(['env'])
        # call(['py.test', 'tests/acceptance/test_plugin_health.py'])
        # print('YAY~!')

    #     from selenium import webdriver
    #     browser = webdriver.Chrome()
    #     browser.get(path)

    # def setUp(self, )
