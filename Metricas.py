import xlrd
import xlsxwriter as xw

Mes = "Junho"
Qtd_Semanas = 5

Torre_1 = '""'
Torre_2 = '""'
Torre_3 = '""'
Torre_4 = '""'
Torre_5 = '""'

Nome_arquivo = ".xlsx"

Type_metrica=3

count_torre = 0
report_snow = xlrd.open_workbook('.xlsx')
sheet_report = report_snow.sheet_by_index(0)

novo_arquivo = xw.Workbook(Nome_arquivo)
sheet_base = novo_arquivo.add_worksheet('Base')

formatacao = novo_arquivo.add_format({'bold': True})

sheet_base.write(0 , 11, "Formula Criado", formatacao)
sheet_base.write(0 , 12, "Formula Fechado", formatacao)
sheet_base.write(0 , 13, "Fechado Sem 1", formatacao)
sheet_base.write(0 , 14, "Fechado Sem 2", formatacao)
sheet_base.write(0 , 15, "Fechado Sem 3", formatacao)
sheet_base.write(0 , 16, "Fechado Sem 4", formatacao)
sheet_base.write(0 , 17, "Fechado Sem 5", formatacao)
sheet_base.write(0, 18, "Status consolidado", formatacao)
sheet_base.write(0, 19, "Torre consoludada", formatacao)

for i in range(sheet_report.ncols):
    valores = sheet_report.col_values(i)
    sheet_base.write_column(0, i, valores)

sheet_base.set_column(0,20,15)
	
for i in range(sheet_report.nrows-1):
    column_H = "H" + str(i+2)
    sheet_base.write(i+1, 19, '=IF(OR('+ column_H +'='+ Torre_1 +', '+ column_H +'='+ Torre_2 +', '+ column_H +'='+ Torre_3 +', '+ column_H +'='+ Torre_4 +', '+ column_H +'='+ Torre_5+'),"SIM", "NAO")')

for i in range(sheet_report.nrows-1):
    column_T= "T" + str(i+2)
    column_E = "E" + str(i+2)
    column_D = "D" + str(i+2)
    sheet_base.write(i+1, 11, '=IF('+column_T+' = "SIM", WEEKNUM('+ column_E + ')-WEEKNUM(EOMONTH('+ column_E + ',-1)+1),WEEKNUM('+ column_D + ')-WEEKNUM(EOMONTH('+ column_D + ',-1)+1))')

for i in range(sheet_report.nrows-1):
    column_F = "F" + str(i+2)
    column_C = "C" + str(i+2)
    column_G = "G" +str(i+2)
    sheet_base.write(i+1, 12, '=IF(OR('+ column_C +' = "Canceled",'+ column_C +' = "Closed"), WEEKNUM('+ column_G +')-WEEKNUM(EOMONTH('+ column_G +',-1)+1),WEEKNUM('+ column_F +')-WEEKNUM(EOMONTH('+ column_F +',-1)+1))')

for i in range(sheet_report.nrows-1):
    column_T = "T" + str(i+2)
    column_M = "M" + str(i+2)
    sheet_base.write(i+1, 13, '=IF(AND('+ column_T +' = "SIM",'+ column_M +' = 0), "SIM", "NAO")')

for i in range(sheet_report.nrows-1):
    column_T = "T" + str(i+2)
    column_M = "M" + str(i+2)
    sheet_base.write(i+1, 14, '=IF(AND('+ column_T +' = "SIM",'+ column_M +' = 1), "SIM", "NAO")')

for i in range(sheet_report.nrows-1):
    column_T = "T" + str(i+2)
    column_M = "M" + str(i+2)
    sheet_base.write(i+1, 15, '=IF(AND('+ column_T +' = "SIM",'+ column_M +' = 2), "SIM", "NAO")')

for i in range(sheet_report.nrows-1):
    column_T = "T" + str(i+2)
    column_M = "M" + str(i+2)
    sheet_base.write(i+1, 16, '=IF(AND('+ column_T +' = "SIM",'+ column_M +' = 3), "SIM", "NAO")')

for i in range(sheet_report.nrows-1):
    column_T = "T" + str(i+2)
    column_M = "M" + str(i+2)
    sheet_base.write(i+1, 17, '=IF(AND('+ column_T +' = "SIM",'+ column_M +' = 4), "SIM", "NAO")')

for i in range(sheet_report.nrows-1):
    column_C = "C" + str(i+2)
    sheet_base.write(i+1, 18, '=IF(OR('+ column_C + '="Open",'+ column_C + '="In progress", '+ column_C + '="Work in Progress"), "Open", "Resolved")')                  

sheet_tabela = novo_arquivo.add_worksheet('Tabela')

if(Type_metrica == 2):
        sheet_tabela.write(0,0, "Semana", formatacao)
        sheet_tabela.write(0,1, "Atendido pela torre", formatacao)
        sheet_tabela.write(0,2, "Finalizados na torre", formatacao)
        sheet_tabela.write(0,3, "Em aberto", formatacao)
        sheet_tabela.write(0,4, "Backlog", formatacao)
        sheet_tabela.set_column(0, 5, 8)

if(Type_metrica == 3):
        sheet_tabela.write(0,0, "Semana", formatacao)
        sheet_tabela.write(0,1, "Planejado", formatacao)
        sheet_tabela.write(0,2, "Encerrado", formatacao)
        sheet_tabela.write(0,3, "Em aberto", formatacao)
        sheet_tabela.write(0,4, "Backlog", formatacao)
        sheet_tabela.set_column(0, 5, 8)
if(Type_metrica == 1):
        sheet_tabela.write(0,0, "Semana", formatacao)
        sheet_tabela.write(0,1, "Aberto", formatacao)
        sheet_tabela.write(0,2, "Resolvido", formatacao)
        sheet_tabela.write(0,3, "Em aberto", formatacao)
        sheet_tabela.write(0,4, "Backlog", formatacao)
        sheet_tabela.write(0,5, "Variacao", formatacao)
        sheet_tabela.set_column(0, 5, 8)

if (Qtd_Semanas == 5):
    for i in range(5):
        week = "Semana " + str(i+1)
        sheet_tabela.write(i+1, 0, week, formatacao)

    sheet_tabela.write(6,0, Mes, formatacao)

    for i in range(5):
        x = str(i)
        sheet_tabela.write(i+1, 1, '=COUNTIF(Base!L:L, '+ x +')')

    sheet_tabela.write(1, 2, '=COUNTIF(Base!N:N, "SIM")')
    sheet_tabela.write(2, 2, '=COUNTIF(Base!O:O, "SIM")')
    sheet_tabela.write(3, 2, '=COUNTIF(Base!P:P, "SIM")')
    sheet_tabela.write(4, 2, '=COUNTIF(Base!Q:Q, "SIM")')
    sheet_tabela.write(5, 2, '=COUNTIF(Base!R:R, "SIM")')

    for i in range(5):
        x = str(i)
        sheet_tabela.write(i+1, 3, '=COUNTIFS(Base!T:T, "SIM", Base!S:S, "Open", Base!L:L, '+ x +')')


    sheet_tabela.write(1,4, 0)
    for i in range(5):
        column_D = "D" + str(i+2)
        column_E = "E" + str(i+2)
        sheet_tabela.write(i+2, 4, '=SUM('+ column_D +'+ '+ column_E +')')

    for i in range(5):
        column_B = "B" + str(i+2)
        sheet_tabela.write(i+1, 5, '='+ column_B +'')
else:

    for i in range(4):
        week = "Semana " + str(i+1)
        sheet_tabela.write(i+1, 0, week, formatacao)
    sheet_tabela.write(5, 0, Mes, formatacao)


    for i in range(4):
        x = str(i)
        sheet_tabela.write(i+1, 1, '=COUNTIF(Base!L:L, '+ x +')')


    sheet_tabela.write(1, 2, '=COUNTIF(Base!N:N, "SIM")')
    sheet_tabela.write(2, 2, '=COUNTIF(Base!O:O, "SIM")')
    sheet_tabela.write(3, 2, '=COUNTIF(Base!P:P, "SIM")')
    sheet_tabela.write(4, 2, '=COUNTIF(Base!Q:Q, "SIM")')

    for i in range(4):
        x = str(i)
        sheet_tabela.write(i+1, 3, '=COUNTIFS(Base!T:T, "SIM", Base!S:S, "Open", Base!L:L, '+ x +')')

    sheet_tabela.write(1,4, 0)
    for i in range(4):
        column_D = "D" + str(i+2)
        column_E = "E" + str(i+2)
        sheet_tabela.write(i+2, 4, '=SUM('+ column_D +'+ '+ column_E +')')

if (Type_metrica == 1):
    for i in range(4):
        column_B = "B" + str(i+2)
        sheet_tabela.write(i+1, 5, '='+ column_B +'')

column_chart = novo_arquivo.add_chart({'type': 'column'})

if (Type_metrica == 1):
    line_chart = novo_arquivo.add_chart({'type':'line'})


if (Qtd_Semanas == 5):

    column_chart.add_series({'name': '=Tabela!B1',
                              'categories':'=Tabela!A2:A7',
                              'values': '=Tabela!$B$2:$B$6',
                              'type':'line',
                              'fill':{ 'color':'#4169E1'},
                              'data_labels': {
                                'value': True,
                                'font': {'rotation': -90, 'size':9, 'bold': True}}})
    column_chart.add_series({'name': '=Tabela!C1',
                             'categories':'=Tabela!A2:A7',
                             'values': '=Tabela!$C$2:$C$6',
                             'fill':{ 'color':'#228B22'},
                              'data_labels': {
                                'value': True,
                                'font': {'rotation': -90, 'size':9,'bold': True}}})
    column_chart.add_series({'name': '=Tabela!E1',
                             'categories':'=Tabela!A2:A7',
                             'values': '=Tabela!$E$2:$E$7',
                             'fill':{ 'color':'#FFD700'},
                              'data_labels': {
                                'value': True,
                                'font': {'rotation': -90, 'size':9, 'bold': True}}})
    if(Type_metrica == 1):
        line_chart.add_series({'name': '=Tabela!F1',
                               'categories':'=Tabela!A2:A7',
                               'values': '=Tabela!$F$2:$F$6',
                               'line':{'color': '#FF0000', 'width':4},
                               'marker': {
                                   'type': 'circle',
                                   'border':{'color': '#FF0000'},
                                   'size': 5,
                                   'fill':{'color': '#FF0000'}}})
        column_chart.combine(line_chart)
else:
    column_chart.add_series({'name': '=Tabela!B1',
                              'categories':'=Tabela!A2:A6',
                              'values': '=Tabela!$B$2:$B$5',
                              'type':'line',
                              'fill':{ 'color':'#4169E1'},
                              'data_labels': {
                                'value': True,
                                'font': {'rotation': -90, 'size':9, 'bold': True}}})
    column_chart.add_series({'name': '=Tabela!C1',
                             'categories':'=Tabela!A2:A6',
                             'values': '=Tabela!$C$2:$C$5',
                             'fill':{ 'color':'#228B22'},
                              'data_labels': {
                                'value': True,
                                'font': {'rotation': -90, 'size':9,'bold': True}}})
    column_chart.add_series({'name': '=Tabela!E1',
                             'categories':'=Tabela!A2:A6',
                             'values': '=Tabela!$E$2:$E$6',
                             'fill':{ 'color':'#FFD700'},
                              'data_labels': {
                                'value': True,
                                'font': {'rotation': -90, 'size':9, 'bold': True}}})
    if (Type_metrica == 1):
        line_chart.add_series({'name': '=Tabela!F1',
                               'categories':'=Tabela!A2:A6',
                               'values': '=Tabela!$F$2:$F$5',
                               'line':{'color': '#FF0000', 'width':4},
                               'marker': {
                                   'type': 'circle',
                                   'border':{'color': '#FF0000'},
                                   'size': 5,
                                   'fill':{'color': '#FF0000'}}})

        column_chart.combine(line_chart)
		
column_chart.set_title({'name': 'Metricas',
                          'name_font': {'size': 12,
                                        'name': 'Calibri',
                                        }})

column_chart.set_legend({'position':'bottom'})
column_chart.set_y_axis({'visible': False})

sheet_tabela.insert_chart('H5', column_chart)

if (Type_metrica == 1):
    list = [Torre_1, Torre_2, Torre_3, Torre_4, Torre_5]
    sheet_torre = ['sheet1', 'sheet2', 'sheet3', 'sheet3', 'sheet4', 'sheet5']
    list_columnchart = [ 'chart1','chart2', 'chart3', 'chart4', 'chart5']
    list_linechart = [ 'line_chart1','line_chart2', 'line_chart3', 'line_chart4', 'line_chart5']
    for i in range(5):
        if (list[i] != '""'):
            count_torre = count_torre + 1

    for i in range(count_torre):
            torre = "Torre" + str(i+1)
            sheet_torre[i] = novo_arquivo.add_worksheet(torre)
            sheet_torre[i].write(0,0, "Semana", formatacao)
            sheet_torre[i].write(0,1, "Aberto", formatacao)
            sheet_torre[i].write(0,2, "Resolvido", formatacao)
            sheet_torre[i].write(0,3, "Em aberto", formatacao)
            sheet_torre[i].write(0,4, "Backlog", formatacao)
            sheet_torre[i].write(0,5, "Variacao", formatacao)
            sheet_torre[i].set_column(0, 5, 8)
    if (Qtd_Semanas == 5):
        for i in range(count_torre):

                for x in range(5):
                    week = "Semana " + str(x+1)
                    sheet_torre[i].write(x+1, 0, week, formatacao)

                sheet_torre[i].write(6,0, Mes, formatacao)
                sheet_torre[i].write(1,4, 0)

        for i in range(count_torre):
                for j in range(5):
                        x = str(j)
                        column_D = "D" + str(j+2)
						 column_E = "E" + str(j+2)
                        column_B = "B" + str(j+2)
                        sheet_torre[i].write(j+1, 1, '=COUNTIFS(Base!I:I, "*"&'+ list[i] +'&"*", Base!L:L, '+ x +')')
                        sheet_torre[i].write(j+1, 2, '=COUNTIFS(Base!H:H, '+ list[i]+ ', Base!M:M, '+ x +')')
                        sheet_torre[i].write(j+1, 3, '=COUNTIFS(Base!H:H, '+ list[i] +', Base!S:S, "Open", Base!L:L, '+ x +')')
                        sheet_torre[i].write(j+2, 4, '=SUM('+ column_D +'+ '+ column_E +')')
                        sheet_torre[i].write(j+1, 5, '='+ column_B +'')
    if (Qtd_Semanas == 4):
        for i in range(count_torre):
                sheet_torre[i].write(5,0, Mes, formatacao)
                sheet_torre[i].write(1,4,0)
                for x in range(4):
                        week = "Semana " + str(x+1)
                        sheet_torre[i].write(x+1, 0, week, formatacao)
        for i in range(count_torre):
                for j in range(4):
                        x = str(j)
                        column_D = "D" + str(j+2)
                        column_E = "E" + str(j+2)
                        column_B = "B" + str(j+2)
                        sheet_torre[i].write(j+1, 1, '=COUNTIFS(Base!H:H, '+ list[i] +', Base!L:L, '+ x +')')
                        sheet_torre[i].write(j+1, 2, '=COUNTIFS(Base!H:H, '+ list[i]+ ', Base!M:M, '+ x +')')
                        sheet_torre[i].write(j+1, 3, '=COUNTIFS(Base!H:H, '+ list[i] +', Base!S:S, "Open", Base!L:L, '+ x +')')
                        sheet_torre[i].write(j+2, 4, '=SUM('+ column_D +'+ '+ column_E +')')
                        sheet_torre[i].write(j+1, 5, '='+ column_B +'')
    if (Qtd_Semanas == 5):
        for x in range(count_torre):
                torres = "Torre" + str(x+1)
                list_columnchart[x] = novo_arquivo.add_chart({'type': 'column'})
                list_linechart[x] = novo_arquivo.add_chart({'type':'line'})
                list_columnchart[x].add_series({'name': '='+ torres +'!B1',
                                      'categories':'='+ torres +'!A2:A7',
                                      'values': '='+ torres +'!$B$2:$B$6',
                                      'type':'line',
                                      'fill':{ 'color':'#4169E1'},
                                      'data_labels': {
                                        'value': True,
                                        'font': {'rotation': -90, 'size':9, 'bold': True}}})
                list_columnchart[x].add_series({'name': '='+ torres +'!C1',
                                     'categories':'='+ torres +'!A2:A7',
                                     'values': '='+ torres +'!$C$2:$C$6',
                                     'fill':{ 'color':'#228B22'},
                                      'data_labels': {
										 'value': True,
                                        'font': {'rotation': -90, 'size':9,'bold': True}}})
                list_columnchart[x].add_series({'name': '='+ torres +'!E1',
                                     'categories':'='+ torre +'!A2:A7',
                                     'values': '='+ torres +'!$E$2:$E$7',
                                     'fill':{ 'color':'#FFD700'},
                                      'data_labels': {
                                         'value': True,
                                         'font': {'rotation': -90, 'size':9, 'bold': True}}})

                list_linechart[x].add_series({'name': '='+ torres +'!F1',
                                   'categories':'='+ torres +'!A2:A7',
                                   'values': '='+ torres +'!$F$2:$F$6',
                                   'line':{'color': '#FF0000', 'width':4},
                                   'marker': {
                                       'type': 'circle',
                                       'border':{'color': '#FF0000'},
                                       'size': 5,
                                       'fill':{'color': '#FF0000'}}})
                list_columnchart[x].combine(list_linechart[x])

                list_columnchart[x].set_title({'name': 'Metricas',
                                      'name_font': {'size': 12,
                                                    'name': 'Calibri',
                                                    }})
                sheet_torre[x].insert_chart('H5', list_columnchart[x])
                list_columnchart[x].set_legend({'position':'bottom'})
                list_columnchart[x].set_y_axis({'visible': False})
    else:
         for x in range(count_torre):
                torres = "Torre" + str(x+1)
                list_columnchart[x] = novo_arquivo.add_chart({'type': 'column'})
                list_linechart[x] = novo_arquivo.add_chart({'type':'line'})
                list_columnchart[x].add_series({'name': '='+ torres +'!B1',
                                      'categories':'='+ torres +'!A2:A6',
                                      'values': '='+ torres +'!$B$2:$B$5',
                                      'type':'line',
                                      'fill':{ 'color':'#4169E1'},
                                      'data_labels': {
                                        'value': True,
										'font': {'rotation': -90, 'size':9, 'bold': True}}})
                list_columnchart[x].add_series({'name': '='+ torres +'!C1',
                                     'categories':'='+ torres +'!A2:A6',
                                     'values': '='+ torres +'!$C$2:$C$5',
									 'fill':{ 'color':'#228B22'},
                                      'data_labels': {
                                        'value': True,
                                        'font': {'rotation': -90, 'size':9,'bold': True}}})
                list_columnchart[x].add_series({'name': '='+ torres +'!E1',
                                     'categories':'='+ torre +'!A2:A6',
                                     'values': '='+ torres +'!$E$2:$E$6',
                                     'fill':{ 'color':'#FFD700'},
                                      'data_labels': {
                                         'value': True,
                                         'font': {'rotation': -90, 'size':9, 'bold': True}}})

                list_linechart[x].add_series({'name': '='+ torres +'!F1',
                                   'categories':'='+ torres +'!A2:A6',
                                   'values': '='+ torres +'!$F$2:$F$5',
                                   'line':{'color': '#FF0000', 'width':4},
                                   'marker': {
                                       'type': 'circle',
                                       'border':{'color': '#FF0000'},
                                       'size': 5,
                                       'fill':{'color': '#FF0000'}}})
                list_columnchart[x].combine(list_linechart[x])

                list_columnchart[x].set_title({'name': 'Metricas',
                                      'name_font': {'size': 12,
                                                    'name': 'Calibri',
                                                    }})
                sheet_torre[x].insert_chart('H5', list_columnchart[x])
                list_columnchart[x].set_legend({'position':'bottom'})
                list_columnchart[x].set_y_axis({'visible': False})


    novo_arquivo.close()
else:
     novo_arquivo.close()

