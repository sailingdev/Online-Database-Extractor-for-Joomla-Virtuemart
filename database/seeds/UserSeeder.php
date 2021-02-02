<?php

use Illuminate\Database\Seeder;
use App\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'manage user']);
        Permission::create(['name' => 'manage role_permission']);
        Permission::create(['name' => 'extract db']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'admin']);
        $role1->givePermissionTo('manage user');
        $role1->givePermissionTo('manage role_permission');
        $role1->givePermissionTo('extract db');

        $role2 = Role::create(['name' => 'user']);
        $role2->givePermissionTo('extract db');

        // crate super-admin and assign existing super-admin role
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin123!@#')
        ]);
        $admin->assignRole($role1);

        // create user and assign existing user role
        $user = User::create([
            'name' => 'customer',
            'email' => 'customer@admin.com',
            'password' => bcrypt('admin123!@#')
        ]);
        $user->assignRole($role2);
    }
}
