class Api {
    constructor(host, token) {
        this._host = host;
        this._token = token;

        this._getJsonOrError = this._getJsonOrError.bind(this);
        this._getHeaders = this._getHeaders.bind(this);
    }

    _getJsonOrError(res) {
        if (res.ok) {
            return res.json();
        }

        throw new Error('Ошибка при загрузке данных');
    }

    _getHeaders() {
        return {
            authorization: this._token,
            'content-type': 'application/json',
        }
    }

    getInfo(section, subsection) {
        return fetch(`${this._host}/v1/cohort-47/${section}${subsection}`, {
            headers: this._getHeaders(),
        })
            .then(this._getJsonOrError)
    }

    getUserData() {
    }


    createCard(name, link) {
        return fetch(`${this._host}/v1/cohort-47/cards`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify({ name, link }),
        })
            .then(this._getJsonOrError)
    }

    editProfile(name, about) {
        return fetch(`${this._host}/v1/cohort-47/users/me`, {

            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({ name, about }),
        })
            .then(this._getJsonOrError)
            .then((result) => {
                return result
            });
    }

    deleteCard(id) {
        return fetch(`${this._host}/v1/cohort-47/cards/${id}`, {
            method: 'DELETE',
            headers: this._getHeaders(),
        })
            .then(this._getJsonOrError)
    }

    changeLike(id, status) {

        return fetch(`${this._host}/v1/cohort-47/cards/${id}/likes`, {
            method: status ? 'PUT' : 'DELETE',
            headers: this._getHeaders(),
        })
            .then(this._getJsonOrError)

    }

    editAvatar(avatar) {
        return fetch(`${this._host}/v1/cohort-47/users/me/avatar`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({ avatar }),
        })
            .then(this._getJsonOrError)

    }


}
 const api = new Api('https://mesto.nomoreparties.co', '35932558-7da7-4b8a-bea3-eca911965720')
 export default api