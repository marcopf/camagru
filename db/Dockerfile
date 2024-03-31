FROM php:8-fpm

COPY ./init_db.php /home
COPY ./script.sh /home

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

CMD ["php", "/home/init_db.php"]