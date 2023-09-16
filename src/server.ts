function login(username: string): string {
    const user = {
        name: 'ram',
    };
    const name = user['name'];
    return username + name;
}

login('sam');
