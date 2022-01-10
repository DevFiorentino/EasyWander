from flask import Blueprint, render_template, redirect, url_for
from flask_login import login_required, current_user

#questo file è una blueprint della nostra applicazione, cioè ha un
#insieme di percorsi al suo interno

views = Blueprint('views', __name__)

@views.route('/')
def home():
    if not current_user.is_authenticated:
        return redirect(url_for('auth.login')) #DA CAMBIARE CON QUELLA DI GENNARO
    return render_template("home.html", user=current_user)

@views.route('credit')
@login_required
def credit():
    return render_template("credit.html")

@views.route('wallet')
@login_required
def wallet():
    return render_template("wallet/wallet.html")

@views.route('sub')
@login_required
def sub():
    return render_template("sub.html")

@views.route('account')
@login_required
def account():
    return render_template("account.html")

@views.route('history')
@login_required
def history():
    return render_template("history.html")