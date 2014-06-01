
<p class="">
	<% if( me ){ %>
	<div class="ui green message">
	<% } else { %>
	<div class="ui blue message">
	<% } %>
		<p>
			<%= message.get( 'content' ) %>	
		</p>
		<div>
			<%= message.get( 'clientName' ) %>	
		</div>
		<div>
			<%= message.get( 'createDate' ) %>
		</div>
	</div>
</p>