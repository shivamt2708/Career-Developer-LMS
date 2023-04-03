# Generated by Django 4.1.3 on 2023-03-20 16:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_alter_chapter_course'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chapter',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course_chapters', to='main.course'),
        ),
    ]
