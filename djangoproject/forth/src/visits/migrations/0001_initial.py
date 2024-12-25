# Generated by Django 5.1 on 2024-09-02 04:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PageVisit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('path', models.TextField(blank=True, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('user_agent', models.TextField()),
                ('ip_address', models.GenericIPAddressField()),
                ('user_id', models.IntegerField(blank=True, null=True)),
                ('session_id', models.CharField(blank=True, max_length=255, null=True)),
                ('referrer', models.TextField(blank=True, null=True)),
                ('user_location', models.TextField(blank=True, null=True)),
                ('user_browser', models.TextField(blank=True, null=True)),
                ('user_device', models.TextField(blank=True, null=True)),
            ],
        ),
    ]