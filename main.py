from flask import Flask, render_template, request, jsonify, make_response

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api', methods=['GET', 'POST'])
def api():
    datos = request.get_json()
    datos = float(datos['texto'])
    datos = str(datos*3)
    respuesta = make_response(jsonify({'respuesta': f'{datos}'}, 200))
    print(respuesta)
    return respuesta

app.run(debug=True)


