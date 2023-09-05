<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitc0379f4a7e60de0a37707981e28ca684
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitc0379f4a7e60de0a37707981e28ca684', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitc0379f4a7e60de0a37707981e28ca684', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitc0379f4a7e60de0a37707981e28ca684::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
