package com.demo.blog;

import java.util.List;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

/**
 * 本 demo 仅表达最为粗浅的 jfinal 用法，更为有价值的实用的企业级用法
 * 详见 JFinal 俱乐部: http://jfinal.com/club
 * 
 * BlogController
 * 所有 sql 与业务逻辑写在 Model 或 Service 中，不要写在 Controller 中，养成好习惯，有利于大型项目的开发与维护
 */
public class ResController extends Controller {
	public void index() {
		render("index.html");
	}
	//数据库取数据返回json
	public void rejson() {
		List<Record> list = Db.find("select * from weblist");
		renderJson(list);
	}
	public void reJsonCase() {
		List<Record> list = Db.find("select * from weblist where Case_tabs_cont_community is not null and Case_tabs_cont_community <> ' '");	
		renderJson(list);
	}
}


