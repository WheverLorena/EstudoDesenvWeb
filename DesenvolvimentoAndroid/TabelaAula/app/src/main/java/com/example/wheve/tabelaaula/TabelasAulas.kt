package com.example.wheve.tabelaaula

import android.graphics.Color
import android.os.Bundle
import android.support.design.widget.Snackbar
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.BaseAdapter
import android.widget.ListView
import android.widget.TextView

import kotlinx.android.synthetic.main.activity_tabelas_aulas.*
import kotlinx.android.synthetic.main.content_tabelas_aulas.*

class TabelasAulas : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tabelas_aulas)

        val listView = findViewById<ListView>(R.id.listClass)
        val listhour = findViewById<ListView>(R.id.list_Time)
        val time = ArrayList<String>()
        val list = ArrayList<String>()
        var adp2: ArrayAdapter<String>?=null
        time.add("7:15_9:15")
        time.add("9:15_10:00")

        var adp: ArrayAdapter<String>?=null
        list.add("Engenharia_Sotf_Avancado")
        list.add("Projeto_Itegrador")

        adp = ArrayAdapter(this,android.R.layout.simple_expandable_list_item_1,list)
        listView.adapter=adp

        adp2 = ArrayAdapter(this,android.R.layout.simple_list_item_1,time)
        listhour.adapter = adp2
    }



}
