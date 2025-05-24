import mongoose, { SchemaTypes } from "mongoose";

const categoriaSchema = mongoose.Schema(
    {
    Imagen : {
        type: String,
        required: true,
        trim: true,
    },
CategoriaNombre : {
        type: String,
        required: true,
        trim: true,
    },
    Descripcion : {
        type: String,
        required: true,
        trim: true,
    }

},
{
    timestamps: true, 
     collection: 'categoria' // <- ¡Este campo es la clave!
}
);

const Categoria = mongoose.model("Categoria", categoriaSchema)

export default Categoria;

